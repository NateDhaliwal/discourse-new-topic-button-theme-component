import { apiInitializer } from "discourse/lib/api";
import CustomHeaderTopicButton from "../components/custom-header-topic-button";

export default apiInitializer("1.15.0", (api) => {
  api.renderInOutlet("below-site-header", CustomHeaderTopicButton);
  const newTopicBtn = document.getElementById("new-topic-button");
  const sidebar = document.getElementById("d-sidebar");
  if (newTopicBtn && sidebar) {
    sidebar.insertBefore(newTopicBtn, sidebar.firstChild);
  }
});
