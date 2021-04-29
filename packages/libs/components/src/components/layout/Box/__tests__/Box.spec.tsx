import React from "react";
import { render } from "@mono/testing";
import { Box } from "../index";

describe( "Box snapshots", () => {
  const testId = "testid.box";

  it( "should render default", () => {
    const { getByTestId } = render( <Box testId={ testId }>test</Box> );
    expect( getByTestId( testId ) ).toMatchSnapshot();
  } );

  it( "should render with column classname", () => {
    const { getByTestId } = render( <Box testId={ testId } column>test</Box> );
    expect( getByTestId( testId ) ).toMatchSnapshot();
  } );

  it( "should render with custom classname 'test'", () => {
    const { getByTestId } = render( <Box testId={ testId } className="test">test</Box> );
    expect( getByTestId( testId ) ).toMatchSnapshot();
  } );

  it( "should render as <main> tag", () => {
    const { getByTestId } = render( <Box testId={ testId } as="main">test</Box> );
    expect( getByTestId( testId ) ).toMatchSnapshot();
  } );
} );
