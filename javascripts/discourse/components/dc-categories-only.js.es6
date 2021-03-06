import { openNewCategoryModal } from "discourse/routes/discovery-categories";
import { computed } from "@ember/object";
import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),

  showCategoryAdmin: computed(function() {
    return this.currentUser && this.currentUser.admin;
  }),

  actions: {
    // https://github.com/discourse/discourse/blob/2cb9e85d14b3c2bfbf79013042799a46dd252ead/app/assets/javascripts/discourse/app/components/d-navigation.js#L91
    selectCategoryAdminDropdownAction(actionId) {
      if (actionId === "create") {
        this.router.transitionTo("newCategory");
      }
    }
  }
});
