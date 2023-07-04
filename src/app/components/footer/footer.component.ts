import { Component } from "@angular/core";
import { EIcons, EPath } from "src/app/components/header/header.interface";

@Component({
  selector: "shop-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  public logo = { path: EPath.logo, icon: EIcons.logo };
  public icons = [
    {
      path: "https://www.youtube.com/",
      icon: "../../../assets/img/icons/youtube.svg",
      alt: "youtube",
    },
    {
      path: "https://www.facebook.com/",
      icon: "../../../assets/img/icons/facebook.svg",
      alt: "facebook",
    },
    {
      path: "https://www.instagram.com/",
      icon: "../../../assets/img/icons/instagram.svg",
      alt: "instagram",
    },
  ];
}
