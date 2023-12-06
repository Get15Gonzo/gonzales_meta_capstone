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
            expect(getDate()).resolves.toHaveAccessibleErrorMessage('* Please Select a Date');
            expect(getDiners()).rejects.toHaveAccessibleErrorMessage('* Please Select The Amount of Diners');
            expect(getOccasion()).rejects.toHaveAccessibleErrorMessage('* Please Select an Occasion');
            expect(getTime()).rejects.toHaveAccessibleErrorMessage('* Please Select a Time');
        })
    })

    function clickNextButton() {
        user.click(screen.getByRole('button', {name: /continue/i}))
    } 

    function getDate() {
        return screen.findByTestId('error-date')
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
    
