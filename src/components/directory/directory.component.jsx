import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectSections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, title, imageUrl, size }) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});
export default connect(mapStateToProps)(Directory);
