import React from "react";
import { render } from "@mono/testing";
import { Text } from "../index";

describe( "Text snapshots", () => {
    const testId = "testid.text";

    it( "should render default", () => {
        const { getByTestId } = render( <Text testId={ testId }>test</Text> );
        expect( getByTestId( testId ) ).toMatchSnapshot();
    } );

    it( "should render as p tag", () => {
        const { getByTestId } = render( <Text as="p" testId={ testId }>test</Text> );
        expect( getByTestId( testId ) ).toMatchSnapshot();
    } );

    it( "should render as h1 tag", () => {
        const { getByTestId } = render( <Text as="h1" testId={ testId }>test</Text> );
        expect( getByTestId( testId ) ).toMatchSnapshot();
    } );
} );
