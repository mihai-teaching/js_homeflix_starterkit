<script>
import { mapActions, mapGetters } from "vuex";

// Components
import Sample from "./components/Sample.vue";

// Constants
import data from "../../_helpers/getData";
import { MOVIES, APP_STATE } from "../App/core/constants";

// Student's code
const {
  SHOW_SAMPLE,
  searchMovies,
  sortMovies,
  populateSelect,
  filterMovies,
  displayMovie
} = data;

export default {
  name: "Main",
  data: function() {
    return {
      searchValue: null,
      orderValue: "true",
      filterOptions: ["NO_DATA_AVAILABLE"],
      items: [],
      // showSample: SHOW_SAMPLE ? SHOW_SAMPLE : false
      showSample: true
    };
  },
  props: {
    show: Boolean
  },
  components: {
    Sample
  },
  computed: {
    ...mapGetters("app", ["appCurrentState"])
  },
  methods: {
    ...mapActions("app", ["setAppState"]),
    // Search
    setItems(items) {
      console.log(items.map(m => m.title));
      this.items = items;
    },
    //
    sortItems(items) {
      if (sortMovies) {
        if (
          this.appCurrentState <= APP_STATE.MOVIES__ADDING_ORDER_FILTER_FEATURE
        ) {
          this.setAppState(APP_STATE.MOVIES__POPULATE_SELECT);
        }
        return sortMovies(items, this.orderValue === "true");
      }
      return items;
    },
    //
    onOrderValueChange() {
      this.setItems(this.sortItems(this.items));
    },
    //
    populateSelectFilter(items) {
      if (populateSelect) {
        if (this.appCurrentState <= APP_STATE.MOVIES__POPULATE_SELECT) {
          this.setAppState(APP_STATE.MOVIES__ADDING_GENRE_FILTER_FEATURE);
        }
        this.filterOptions = populateSelect(items);
      }
    },
    //
    onFilterChange(value) {
      if (filterMovies) {
        if (
          this.appCurrentState <= APP_STATE.MOVIES__ADDING_GENRE_FILTER_FEATURE
        ) {
          this.setAppState(APP_STATE.MOVIES__DISPLAYING_MOVIE_DATA);
        }
        if (typeof value === "string") {
          this.setItems(filterMovies(this.items, value));
        } else {
          const selectedMovies = searchMovies(MOVIES, this.searchValue);
          const sortedMovies = this.sortItems(selectedMovies);
          this.populateSelectFilter(sortedMovies);
          this.displayItems(sortedMovies);
        }
      }
    },
    //
    displayItems(items) {
      if (displayMovie) {
        if (this.appCurrentState <= APP_STATE.MOVIES__DISPLAYING_MOVIE_DATA) {
          this.setAppState(APP_STATE.COMPLETED);
        }
        const newItems = items.map(item => displayMovie(item));
        const sample = newItems.length > 0 ? newItems[0] : null;
        if (
          newItems.length > 0 &&
          typeof sample.title === "string" &&
          sample.genres instanceof Array &&
          typeof sample.element === "object"
        ) {
          this.setItems(newItems);
        }
      } else this.setItems([]);
    },
    // Submit
    onSubmit(event) {
      event.preventDefault();
      if (searchMovies) {
        if (this.appCurrentState <= APP_STATE.MOVIES__ADDING_SEARCH_FEATURE) {
          this.setAppState(APP_STATE.MOVIES__ADDING_ORDER_FILTER_FEATURE);
        }
        const selectedMovies = searchMovies(MOVIES, this.searchValue);
        const sortedMovies = this.sortItems(selectedMovies);
        this.populateSelectFilter(sortedMovies);
        this.displayItems(sortedMovies);
      } else {
        this.setItems([]);
      }
    }
  }
};
</script>

<template>
  <transition>
    <main v-if="show" class="c-main">
      <form @submit="onSubmit">
        <input
          v-model="searchValue"
          type="text"
          placeholder="search..."
          class="c-main_search o-input"
        >
        <div class="c-main_form-options">
          <div class="c-main_sorting">
            <label for="asc" class="c-main_sorting_label">Ascending</label>
            <input
              v-model="orderValue"
              id="asc"
              type="radio"
              value="true"
              class="c-main_sorting_input"
              @change="onOrderValueChange"
              checked
            >
            <label for="desc" class="c-main_sorting_label">Descending</label>
            <input
              v-model="orderValue"
              id="desc"
              type="radio"
              value="false"
              @change="onOrderValueChange"
              class="c-main_sorting_input"
            >
          </div>
          <v-select
            :options="filterOptions"
            :onChange="onFilterChange"
            @formchange="onFilterChange"
            class="c-main_select"
          >
            <span slot="no-options">No data available</span>
          </v-select>
          <button type="submit" class="c-main_submit-btn"></button>
        </div>
      </form>
      <transition-group name="fade" tag="ul" class="c-main_list o-layout o-wrapper -gutter-small">
        <li v-if="showSample" key="movie-sample" class="c-main_item o-layout_item u-1/4">
          <Sample/>
        </li>
        <li class="c-main_item o-layout_item u-1/4" v-for="item in items" :key="item.title">
          <span v-html="item.element.outerHTML"></span>
        </li>
      </transition-group>
    </main>
  </transition>
</template>