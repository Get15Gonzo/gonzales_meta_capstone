import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import BookingTwo from '../components/BookingTwo';


describe('BookingTwo', () => {

    const user = userEvent.setup()

    beforeEach(() => {
        render(<BookingTwo />);
    })

    test('requires 4 fields on the second part of the form', () => {

        submitButton();

            expect(getFirstName()).toHaveAccessibleErrorMessage('*Firred');
            expect(getEmail()).rejects.toHaveAccessibleErrorMessage();
            expect(getLastName()).rejects.toHaveAccessibleErrorMessage();

    })

    it('displays a type error for email', async () => {
    })

    it('displays a wrong phone number error for invalid phone input cases', async () => {

    })

    function getFirstName() {
        return screen.findByTestId('firstName')
    }

    function getEmail() {
        return screen.findByTestId('email')
    }
    function getLastName() {
        return screen.findByTestId('lastName')
    }
    function getPrivacy() {
        return screen.findByTestId('privacyAgreement')
    }
    function getPhone() {
    }

    function submitButton() {
        return user.click(screen.findByTestId('submit'))
    }

})