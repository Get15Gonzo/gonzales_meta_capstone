import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import BookingTwo from '../components/BookingTwo';


describe('BookingTwo', () => {

    const user = userEvent.setup()

    beforeEach(() => {
        render(<BookingTwo />);
    })

    it('requires 4 fields on the second part of the form', async () => {

        submitButton()

        waitFor(() => {
            expect(getFirstName()).toHaveAccessibleErrorMessage('*First Name is required');
            expect(getLastName()).toHaveAccessibleErrorMessage('*Last Name is required');
            expect(getEmail()).toHaveAccessibleErrorMessage('*Email is required');
            expect(getEmail).toHaveAccessibleErrorMessage('*Pleasevacy Policy');
        })

    })

    it('displays a type error for email', async () => {
    })

    it('displays a wrong phone number error for invalid phone input cases', async () => {

    })

    function getFirstName() {
        return screen.findByRole('heading', {name: /\*first name/i})
    }

    function getEmail() {
        return screen.findByRole('heading', {name: /\*email/i})
    }
    function getLastName() {
        return screen.findByRole('heading', {name: /\*last name/i})
    }
    function getPrivacy() {
        return screen.findByTestId('privacy')
    }
    function getPhone() {
    }

    function submitButton() {
        return user.click(screen.findByTestId('submit'))
    }

})