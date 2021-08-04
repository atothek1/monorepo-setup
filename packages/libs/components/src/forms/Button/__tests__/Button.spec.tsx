import React from "react";
import { render, userEvent } from "@mono/testing";
import { Button } from "../index";

const testId = "testid.button";

describe( "Button snapshots", () => {
    it( "should render default", () => {
        const { getByTestId } = render( <Button testId={ testId }>test</Button> );
        expect( getByTestId( testId ) ).toMatchSnapshot();
    } );

    it( "should render as type submit", () => {
        const { getByTestId } = render( <Button testId={ testId } type="submit">test</Button> );
        expect( getByTestId( testId ) ).toMatchSnapshot();
    } );

    it( "should render as type reset", () => {
        const { getByTestId } = render( <Button testId={ testId } type="reset">test</Button> );
        expect( getByTestId( testId ) ).toMatchSnapshot();
    } );

    it( "should render disabled", () => {
        const { getByTestId } = render( <Button testId={ testId } isDisabled>test</Button> );
        expect( getByTestId( testId ) ).toMatchSnapshot();
    } );
} );

describe( "Button behaviour", () => {

    it( "should call internal noop handler", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render( <Button testId={ testId }>test</Button> );
        expect( handleClick ).not.toBeCalled();
        userEvent.click( getByTestId( testId ) );
    } );

    it( "should call passed in handler", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render( <Button testId={ testId } onClick={ handleClick }>test</Button> );
        expect( handleClick ).not.toBeCalled();
        userEvent.click( getByTestId( testId ) );
        expect( handleClick ).toBeCalledTimes( 1 );
    } );

    it( "should not call passed in handler as button is disabled", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render( <Button testId={ testId } isDisabled onClick={ handleClick }>test</Button> );
        userEvent.click( getByTestId( testId ) );
        expect( handleClick ).not.toBeCalled();
    } );
} );
