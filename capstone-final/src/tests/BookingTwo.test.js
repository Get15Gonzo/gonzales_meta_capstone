import { render, screen, within, fireEvent, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingTwo from '../components/BookingTwo'

describe('BookingTwo', () => {
        const onSubmit = jest.fn()

        beforeEach(() => {
            onSubmit.mockClear();
            render(<BookingTwo onSubmit={onSubmit} />);
        })

    it('renders the second page successfully', async () => {

        const reservations = await screen.findByText('Reservations')
        expect(reservations).toBeInTheDocument()

        const firstName = await screen.findByText('*First Name')
        expect(firstName).toBeInTheDocument()

        const time = await screen.findByText('Submit')
        expect(time).toBeInTheDocument()
        
        const continueButton = await screen.findByText('Back')
        expect(continueButton).toBeInTheDocument()
    })
})