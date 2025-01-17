import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Mammals",
    description: "1a. Animal has a large body, thick fur, and is a bear → Go to Step 2."+"\n\n 1b. Animal has a slimmer body, looks like a wild dog 🐕 → Go to Step 3",
    link: "#", // Assuming you have a dedicated page for the key
  },
  {
    title: "Step 2", 
    description:
      "2a. Bear has a distinct white 'V' shape on its chest → Formosan Black Bear." + '\n\n 2b. Bear lacks white markings, with a uniform brown coat → Himalayan Brown Bear',
    link: "#",
  },
  {
    title: "Step 3", 
    description:
      "3a. Animal has a reddish coat and shorter legs → Dhole" + '\n 3b. Animal has a reddish coat with slightly longer legs and ears → Dingo',
    link: "",
  },
  {
    title: "Reptiles",
    description:"1a. Reptile has a long, narrow snout 🐊 → Go to Step 2."+"\n\n 1b. Reptile has a broad, lizard-like snout 🦎 → Go to Step 3",
    link: "",
  },
  {
    title: "Step 2",
    description:
    "2a. Snout is extremely long and thin, almost like a beak → Gharial.      "+"\n\n 2b. Snout is broad and robust, not extremely narrow → Saltwater Crocodile",
    link: "",
  },
  {
    title: "Step 3",
    description:
      "3a. Reptile is very large, up to 3 meters in length, with a bulky body → Komodo Dragon"  + '\n\n 3b. Reptile is smaller, around 1.5-2 meters, with more distinct skin patterns → Nile Monitor',
    link: "",
  },
  {
    title: "Birds",
    description:"1a. Bird has a large, tall body with long legs and neck, and is flightless → Go to Step 2."+"\n\n Bird has a distinct, brightly colored face, with a casque or large facial feature → Go to Step 3",
    link: "",
  },
  {
    title: "Step 2",
    description:
    "2a. Bird is the largest living species, with a thick neck and strong legs → Ostrich"+"\n\n2b. Bird is slightly smaller, with a slimmer build and less robust neck → Emu",
    link: "",
  },
  {
    title: "Step 3",
    description:
      "3a. Bird has a bright blue head, a large casque (helmet-like crest), and a black body → Cassowary"  + '\n\n 3b. Bird has a red face and large, black body, with no casque → Southern Ground Hornbill',
    link: "",
  },
];
