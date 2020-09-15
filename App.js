import React, { useState } from "react";

import Screen from "./app/components/Screen";
import { TextInput, Text } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ];
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        icon="apps"
        placeholder="Category"
        items={categories}
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
