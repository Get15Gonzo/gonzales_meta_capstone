import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import BookingOne from '../components/BookingOne';

describe('BookingOne', () => {

    const user = userEvent.setup()

    beforeEach(() => {
        render(<BookingOne />);
    })

    it('has 4 required fields on the first part of the form', async () => {

        clickNextButton()

        waitFor(() => {
            expect(getDate()).toHaveAccessibleErrorMessage('* Please Select a Date');
            expect(getDiners()).toHaveAccessibleErrorMessage('* Please Select The Amount of Diners');
            expect(getOccasion()).toHaveAccessibleErrorMessage('* Please Select an Occasion');
            expect(getTime()).toHaveAccessibleErrorMessage('* Please Select a Time');
        })
    })

    function clickNextButton() {
        user.click(screen.getByRole('button', {name: /continue/i}))
    } 

    function getDate() {
        return screen.getByPlaceholderText(/reservedate/i)
    }

    function getDiners() {
        return screen.getByPlaceholderText('NumberOfDiners');
    }

    function getOccasion() {
        return  screen.getByPlaceholderText('Occasion');
    }

    function getTime() {
        screen.getByPlaceholderText('Time')
    }

})
    
