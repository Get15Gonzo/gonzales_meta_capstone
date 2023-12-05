import { render, screen, within, fireEvent, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingTwo from '../components/BookingTwo'

describe('BookingTwo', () => {
        const onSubmit = jest.fn()

        beforeEach(() => {
            onSubmit.mockClear();
            render(<BookingTwo onSubmit={onSubmit} />);
        })

    it('onSubmit is called when all fields pass validation', async () => {
        const user = userEvent.setup()

        const name = screen.findByRole('heading', {name: /\*first name/i})
            user.type(name, 'Thomas')

            const email = screen.findByRole('heading', {name: /\*email/i})
            user.type(email, 'tom@gmail.com')

            const lastName = screen.findByRole('heading', {name: /\*last name/i})
            user.type(lastName, 'Gonzales')

            const privacyPolicy = screen.findByTestId('privacy')
            user.click(privacyPolicy)

            user.click(screen.findByTestId('submit'))

            waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
            })
    })
})