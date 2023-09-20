import { useState } from "react";
import Gallery from "./Gallery";
import SearchandUpload from "./SearchandUpload";

//  Static Gallery Images
const Gal = [
  {
    url: "https://www.kicksonfire.com/wp-content/uploads/2017/03/NIKE-AIR-MAX-1-1-1.jpg",
    tags: ["shoe", "nike", "fashion", "snickers"],
  },
  {
    url: "https://imageio.forbes.com/specials-images/imageserve/61cdd9ec2bbdedb659077751/Neutral-living-color-corrected/960x0.jpg?format=jpg&width=960",
    tags: [
      "interior",
      "design",
      "home",
      "decoration",
      "hotel",
      "apartment",
      "relaxation",
    ],
  },
  {
    url: "https://media.wired.com/photos/63b8d0a771c6b526845f15a6/16:9/w_2400,h_1350,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg",
    tags: ["cars", "transportation", "vehicle", "movement"],
  },
  {
    url: "https://i.redd.it/canr8ejua82b1.jpg",
    tags: ["shoe", "new-balance", "fashion", "snickers"],
  },
  {
    url: "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/07/Contemporary-interior-design-and-decor-Urbanology-Designs.jpg",
    tags: [
      "interior",
      "design",
      "home",
      "decoration",
      "hotel",
      "apartment",
      "relaxation",
    ],
  },
  {
    url: "https://d1sve9khgp0cw0.cloudfront.net/wp-content/uploads/2022/07/TnuIO7SFeYV03YQCpucl-I9Rdxo.jpg",
    tags: ["food", "fries", "burger", "harm-burger"],
  },
  {
    url: "https://www.collierparks.com/wp-content/uploads/2020/05/beach-information.jpg",
    tags: ["water", "beach", "relaxation", "swim"],
  },
  {
    url: "https://media.istockphoto.com/id/625739874/photo/heavy-weight-exercise.jpg?s=612x612&w=0&k=20&c=B1uzJW1DBei2Rx5hnt139tt9dt3L7TbKrpgwbMR-LrI=",
    tags: ["dumbell", "excercise", "gym", "weight", "heavy"],
  },
  {
    url: "https://media.istockphoto.com/id/492259110/photo/indoor-weight-lifting-training-equipment-in-interior-gymnasium-health-club.jpg?s=2048x2048&w=is&k=20&c=rqzQLA-weEV7gDS7mwCLugMMJ3U85KDIDbHlQoUBMWk=",
    tags: ["excercise", "gym", "weight", "heavy"],
  },
  {
    url: "https://www.si.com/.image/t_share/MTcxNTI1MTc1NDM3Njk4NTMx/generic-basketball-shot.jpg",
    tags: ["sport", "basketball", "game"],
  },
  {
    url: "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format",
    tags: ["cars", "transportation", "vehicle", "movement"],
  },
  {
    url: "https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg",
    tags: ["sport", "football", "game"],
  },

  {
    url: "https://th-thumbnailer.cdn-si-edu.com/4CHmZ6x8r6h19BuMInwXIc0SJVQ=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/9a/38/9a388951-b252-4535-b5ee-740d21a74842/mmmmm.jpg",
    tags: ["food", "pizza"],
  },
  {
    url: "https://i.dailymail.co.uk/1s/2018/11/01/18/5668494-0-image-a-4_1541098633929.jpg",
    tags: ["food", "coffee", "drink", "morning", "day"],
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/54aab4e1e4b010b9ae3675d3/1670003049975-5X7U73010Z4IW7BL0RVR/Ventures+Thomas+004.jpg?format=1000w",
    tags: ["water", "pool", "relaxation", "swim"],
  },
  {
    url: "https://pxl-duracuk.terminalfour.net/prod01/prodbucket01/media/durham-university/library-/about-us/current-projects/Alice-Stubbings.jpeg",
    tags: ["art", "painting", "colors"],
  },
  {
    url: "https://img.freepik.com/free-photo/one-woman-elegance-colorful-autumn-nature-generative-ai_188544-9733.jpg",
    tags: ["art", "painting", "colors"],
  },
  {
    url: "https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg",
    tags: ["ai", "technology", "data", "artificial", "intelligence"],
  },
  {
    url: "https://www.cpapracticeadvisor.com/wp-content/uploads/sites/2/2023/03/artificial-intelligence.jpg",
    tags: ["ai", "technology", "data", "artificial", "intelligence"],
  },
  {
    url: "https://images.homify.com/images/a_0,c_fill,f_auto,h_900,q_auto,w_1920/v1438813270/p/photo/image/379779/modern_house_hd_2/modern-doma-photos-by-mer-ces-arch-viz-studio.jpg",
    tags: [
      "architecture",
      "structure",
      "building",
      "design",
      "engineering",
      "development",
    ],
  },
  {
    url: "https://www.allrecipes.com/thmb/HKTgJj_brdt5yMAMvFPvpGWdbRU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20784-ice-cream-cake-ddmfs-step-4x3-49b3ca7af5074beeb60c02bd6f569624.jpg",
    tags: ["cake", "ice-cream", "chocolate", "food"],
  },
  {
    url: "https://resources.stuff.co.nz/content/dam/images/4/z/4/b/j/b/image.related.StuffLandscapeSixteenByNine.710x400.26g0lm.png/1685813739624.jpg?format=pjpg&optimize=medium",
    tags: ["food", "coffee", "drink", "morning", "day"],
  },
  {
    url: "https://recipefairy.com/wp-content/uploads/2019/12/chocolate-milkshake-with-icecream-scaled.jpg",
    tags: ["ice-cream", "chocolate", "food"],
  },
  {
    url: "https://i.pinimg.com/736x/05/9c/9d/059c9d343d70eac30b9ca9d105eadb46.jpg",
    tags: [
      "architecture",
      "structure",
      "building",
      "design",
      "engineering",
      "development",
    ],
  },
];

const Home = () => {
  return (
    <section className="px-3 sm:px-6 md:px-14">
      <SearchandUpload items={Gal} />
      <Gallery items={Gal} />
    </section>
  );
};

export default Home;
