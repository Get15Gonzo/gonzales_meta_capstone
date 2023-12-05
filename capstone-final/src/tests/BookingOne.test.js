import { render, screen, within, waitFor, fireEvent, getByPlaceholderText } from '@testing-library/react';
import user from '@testing-library/user-event';
import BookingOne from '../components/BookingOne';

/* describe('MultiStepForm', () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(<MultiStepForm onSubmit={onSubmit} />)
    }) */

describe('BookingOne', () => {

    it('renders form properly', () => {
        const onSubmit = jest.fn()

        onSubmit.mockClear();
        render(<BookingOne onSubmit={onSubmit} />);
    })

    it('onSubmit is called when all fields pass validation', async () => {
        render(<BookingOne />);

        fireEvent.click(screen.getByPlaceholderText(/reservedate/i));
        fireEvent.mouseDown(screen.getByPlaceholderText(/reservedate/i));
        fireEvent.change(screen.getByPlaceholderText(/reservedate/i), {
            target: {value: '2023-12-08'}
        })
        
        const dropdownDiner = screen.getByPlaceholderText('Diners');
        user.selectOptions(dropdownDiner, within(dropdownDiner).getByRole('option', {name: '4'}))

        const dropdownOccasion = screen.getByPlaceholderText('Occasion')
        user.selectOptions(dropdownOccasion, within(dropdownOccasion).getByRole('option', {name:'Birthday'}))

        const dropdownTime = screen.getByPlaceholderText('Time')
        user.selectOptions(dropdownTime, within(dropdownTime).getByRole('option', {name:'7:00pm'}))
    })
})
/*
    test('onSubmit is called when all fields pass validation', async () => {
    /* user.type(getDate(), '12-13-2023'); */

/*  const dropdownDiner = screen.getByPlaceholderText(/diners/i)
    user.selectOptions(dropdownDiner, within(dropdownDiner).getByRole('option', {name: '4'}))
    user.type(getDiners(), '4');

    user.type(getOccasion(), 'engagement');

    user.type(getTime(), '7:00pm')

    user.click(screen.getByRole('button', {name: /continue/i}))

    const name = await screen.findByRole('heading', {name: /\*first name/i})
    user.type(name, '*First Name')

    const email = await screen.findByRole('heading', {name: /\*email/i})
    user.type(email, '*Email')

    const lastName = await screen.findByRole('heading', {name: /\*last name/i})
    user.type(lastName, '*Last Name')

    const phone = await screen.findByRole('heading', {name: /\*phone/i})
    user.type(phone, '*Phone')

    const privacyPolicy = await screen.findByRole('heading', {name: /\*please agree to our privacy policy/i})
    user.type(privacyPolicy, '*Please agree to our Privacy Policy')

    user.click(screen.getByRole('button', {name: /submit/i}))

    await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
    })

    expect(onSubmit).toHaveBeenCalledWith({lazy:true})
*/

/* }); */

/* test('has 4 required fields on first step', () => {
        
}) */

/* function getDate() {
        return (
            screen.getByPlaceholderText(/reservedate/i)
        )
    }
    function getDiners() {
        screen.getByDisplayValue(/4/i)
    }

    function getOccasion() {
        screen.getByRole('option', {
            name: /engagement/i
        })
    }

    function getTime() {
        return (
            screen.getByRole('option', {
                name: /7:00pm/i
            })
        )
    } */
/* }) */ 