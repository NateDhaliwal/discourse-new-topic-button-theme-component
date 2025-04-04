import { apiInitializer } from "discourse/lib/api";
import CustomHeaderTopicButton from "../components/custom-header-topic-button";

export default apiInitializer((api) => {
  api.renderInOutlet("below-site-header", CustomHeaderTopicButton);
  
  document.addEventListener("DOMContentLoaded", function() {
    const newTopicBtn = document.getElementById("new-topic-button");
    const sidebar = document.getElementById("d-sidebar");
    if (newTopicBtn && sidebar) {
      sidebar.insertBefore(newTopicBtn, sidebar.firstChild);
    }
  });
});
