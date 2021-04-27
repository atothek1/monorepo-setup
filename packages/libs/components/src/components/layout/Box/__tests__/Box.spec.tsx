import React from "react";
import { render } from "@mono/testing";
import { Box } from "../index";

describe( "Box snapshots", () => {
  it( "should render default", () => {
    const result = render( <Box>test</Box> );
    expect( result.asFragment() ).toMatchSnapshot();
  } );

  it( "should render with column classname", () => {
    const result = render( <Box column>test</Box> );
    expect( result.asFragment() ).toMatchSnapshot();
  } );

  it( "should render with custom classname 'test'", () => {
    const result = render( <Box className="test">test</Box> );
    expect( result.asFragment() ).toMatchSnapshot();
  } );

  it( "should render as <main> tag", () => {
    const result = render( <Box as="main">test</Box> );
    expect( result.asFragment() ).toMatchSnapshot();
  } );
} );
