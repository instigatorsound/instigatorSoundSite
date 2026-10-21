// Edit this list to manage the catalog. Everything on the site is generated from it.
//
// type:     "pedal" | "vst" | "m4l"
// url:      your Gumroad product link
// image:    path under images/ (optional; a placeholder is shown if omitted)
// featured: true to show on the home page
const PRODUCT_TYPES = {
  pedal: "Guitar Pedals",
  vst: "VST Plugins",
  m4l: "Max for Live",
};

const PRODUCTS = [
  {
    id: "example-fuzz",
    name: "Example Fuzz",
    type: "pedal",
    price: "$149",
    description: "A placeholder fuzz pedal. Replace with your own product.",
    url: "https://gumroad.com/",
    image: "",
    featured: true,
  },
  {
    id: "example-reverb",
    name: "Example Reverb",
    type: "vst",
    price: "$29",
    description: "A placeholder reverb plugin (VST3 / AU). Replace with your own product.",
    url: "https://gumroad.com/",
    image: "",
    featured: true,
  },
  {
    id: "example-sequencer",
    name: "Example Sequencer",
    type: "m4l",
    price: "$19",
    description: "A placeholder Max for Live MIDI device. Replace with your own product.",
    url: "https://gumroad.com/",
    image: "",
    featured: true,
  },
];
