const swatchContainer = document.querySelector(".swatchContainer");

const colors = {
  "S/S 27": {
    0: {
      name: "Luminous Blue",
      code: "125-28-38",
      hex: "#193F8F",
      tag: "Color of the Year 2027",
    },
    1: {
      name: "Energy Orange",
      code: "018-57-34",
      hex: "#EE6643",
      tag: "Key Color S/S 27",
    },
    2: {
      name: "Pop Pink",
      code: "151-73-22",
      hex: "#EAA6C5",
      tag: "Key Color S/S 27",
    },
    3: {
      name: "Meadowland Green",
      code: "050-61-19",
      hex: "#A39E58",
      tag: "Key Color S/S 27",
    },
    4: {
      name: "Clay",
      code: "014-60-13",
      hex: "#C38B84",
      tag: "Key Color S/S 27",
    },
  },
  "A/W 26/27": {
    0: {
      name: "Transformative Teal",
      code: "092-37-24",
      hex: "#2F6364",
      tag: "Color of the Year 2026",
    },
    1: {
      name: "Wax Paper",
      code: "035-88-12",
      hex: "#F4E0BF",
      tag: "Key Color A/W 26/27",
    },
    2: {
      name: "Fresh Purple",
      code: "136-32-33",
      hex: "#68468E",
      tag: "Key Color A/W 26/27",
    },
    3: {
      name: "Cocoa Powder",
      code: "008-35-06",
      hex: "#695155",
      tag: "Key Color A/W 26/27",
    },
    4: {
      name: "Green Glow",
      code: "057-82-32",
      hex: "#C7DE64",
      tag: "Key Color A/W 26/27",
    },
  },
  "S/S 26": {
    0: {
      name: "Transformative Teal",
      code: "092-37-24",
      hex: "#2F6364",
      tag: "Color of the Year 2026",
    },
    1: {
      name: "Electric Fuchsia",
      code: "043-65-61",
      hex: "#D966CD",
      tag: "Key Color S/S 26",
    },
    2: {
      name: "Blue Aura",
      code: "177-77-06",
      hex: "#B6C8D5",
      tag: "Key Color S/S 26",
    },
    3: {
      name: "Amber Haze",
      code: "043-65-31",
      hex: "#D2A721",
      tag: "Key Color S/S 26",
    },
    4: {
      name: "Jelly Mint",
      code: "078-80-22",
      hex: "#97D9BD",
      tag: "Key Color S/S 26",
    },
  },
  "A/W 25/26": {
    0: {
      name: "Future Dusk",
      code: "129-35-8",
      hex: "#4C557A",
      tag: "Color of the Year 2025",
    },
    1: {
      name: "Celestial Yellow",
      code: "048-90-17",
      hex: "#EEEAB1",
      tag: "Key Colors A/W 25/26",
    },
    2: {
      name: "Cherry Lacquer",
      code: "159-23-15",
      hex: "#512C3A",
      tag: "Key Colors A/W 25/26",
    },
    3: {
      name: "Neon Flare",
      code: "014-68-51",
      hex: "#FF5E57",
      tag: "Key Colors A/W 25/26",
    },
    4: {
      name: "Retro Blue",
      code: "100-64-14",
      hex: "#71ADBC",
      tag: "Key Colors A/W 25/26",
    },
  },
};

// Set a color pallet from the beginning.
palletSwap("S/S 27");

// Add click events to each button
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", ()  => {
    // Get the inner text
    const palletSelected = button.innerText;
    console.log(palletSelected);

    // Clear the old swatches
    swatchContainer.innerHTML = "";

    // Remove the "Active" class from all buttons.
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    // Add the "active" class to this button
    button.classList.add("active");

    // Generate the pallets of selected button
    palletSwap(palletSelected);
  });
});

// Swaps the color pallet to a specific pallet
function palletSwap(pallet) {
  Object.values(colors[pallet]).forEach((color) => {
    console.log(color.name);
    const newSwatch = generateSwatches(
      color.name,
      color.code,
      color.hex,
      color.tag
    );
    swatchContainer.appendChild(newSwatch);
  });
}

// Create the swatch cards.
function generateSwatches(name, code, hex, tag) {
  // Create the Swatch element
  const swatch = document.createElement("div");
  swatch.classList.add("swatch");

  // Create the header container
  const header = document.createElement("div");
  header.classList.add("header");

  // create the logo container
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo");

  // Add images to the logo container
  logoContainer.innerHTML = `<img src="img/coloro-black-logo.png" alt="" srcset="" /> |
            <img src="img/wgsn.png" alt="" />`;

  // Add title
  const title = document.createElement("p");
  title.classList.add("title");
  title.innerText = tag;

  // Add logo container and title to swatch card
  header.appendChild(logoContainer);
  header.appendChild(title);

  swatch.appendChild(header);

  // Create swatch color and add it to the swatch card
  const swatchColor = document.createElement("div");
  swatchColor.classList.add("swatch-color");
  swatchColor.style.background = hex;

  swatch.appendChild(swatchColor);

  // Create the footer container
  const footer = document.createElement("div");
  footer.classList.add("footer");

  // Create the name container
  const nameContainer = document.createElement("div");
  nameContainer.classList.add("color-name-container");

  // Create the dot
  const dot = document.createElement("dot");
  dot.classList.add("dot");
  dot.style.background = hex;

  // Create the name
  const colorName = document.createElement("div");
  colorName.classList.add("color-name");
  colorName.innerText = name;

  // Append the items to the footer
  nameContainer.appendChild(dot);
  nameContainer.appendChild(colorName);

  footer.appendChild(nameContainer);

  // Create the color name
  const colorCode = document.createElement("p");
  colorCode.classList.add("color-code");
  colorCode.innerText = code;

  footer.appendChild(colorCode);
  // Append the footer to the swatch
  swatch.appendChild(footer);

  return swatch;
}
