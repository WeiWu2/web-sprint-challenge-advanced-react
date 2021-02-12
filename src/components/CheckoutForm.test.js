import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText(/first name:/i);
    const lastName = screen.getByLabelText(/last name:/i);
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zip = screen.getByLabelText(/zip:/i);
    const button = screen.getByRole('button', {name: /checkout/i});


    userEvent.type(firstName, "Wei");
    userEvent.type(lastName, "Wu");
    userEvent.type(address, "TotallyNotFakeAddress");
    userEvent.type(city, "TotallyNotFakeCity");
    userEvent.type(state, "TotallyNotFakeState");
    userEvent.type(zip, "TotallyNotFakeZip");


    expect(firstName).toHaveValue('Wei');
    expect(lastName).toHaveValue('Wu');
    expect(address).toHaveValue('TotallyNotFakeAddress');
    expect(city).toHaveValue('TotallyNotFakeCity');
    expect(state).toHaveValue('TotallyNotFakeState');
    expect(zip).toHaveValue('TotallyNotFakeZip');

    userEvent.click(button)

    const successMsgName = screen.getByText(/wei wu/i)
    const successMsgAddress = screen.getByText(/TotallyNotFakeAddress/i)
    const successMsgOtherAddress = screen.getByText(/TotallyNotFakeCity, TotallyNotFakeState TotallyNotFakeZip/i)
    expect(successMsgName).toBeInTheDocument();
    expect(successMsgAddress).toBeInTheDocument();
    expect(successMsgOtherAddress).toBeInTheDocument();
    

});
