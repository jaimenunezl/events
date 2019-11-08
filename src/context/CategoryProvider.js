import React, { Component } from "react";
import axios from "axios";

const CategoryContext = React.createContext();
export const CategoryConsumer = CategoryContext.Consumer;

class CategoryProvider extends Component {
  token = "IUBBOV4PH7UBB4P5DC3U";

  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    const url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;
    const response = await axios.get(url);
    const { categories } = response.data;
    this.setState({ categories });
  };

  render() {
    return (
      <CategoryContext.Provider value={{ categories: this.state.categories }}>
        {this.props.children}
      </CategoryContext.Provider>
    );
  }
}

export default CategoryProvider;
