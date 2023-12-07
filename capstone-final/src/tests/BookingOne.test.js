import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import BookingOne from '../components/BookingOne';

describe('BookingOne', () => {

        const onSubmit = jest.fn()

        const user = userEvent.setup()

        beforeEach(() => {
            onSubmit.mockClear();
            render(<BookingOne onSubmit={onSubmit} />);
        })

    test('renders the first page successfully', async () => {
            
        const reservations = await screen.findByText('Reservations')
        expect(reservations).toBeInTheDocument()

        const time = await screen.findByText('Time')
        expect(time).toBeInTheDocument()
        
        const continueButton = await screen.findByText('Continue')
        expect(continueButton).toBeInTheDocument()

    });

    test('it shows 4 required fields', async () => {
        const user = userEvent.setup()
        
        user.click(screen.getByTestId('continue'))
        
        const diners = screen.getByText('* Please Select The Amount of Diners')
        /* const date = screen.getByText('* Please Select a Date')
        const occasion = await screen.findByText('* Please Select an Occasion')
        const time = await screen.findByText('* Please Select a Time') */

        await waitFor(async() => {
            await expect(diners).toBeInTheDocument('* Please Select The Amount of Diners');
          /*   expect(diners).resolves;
            expect(occasion).resolves;
            expect(time).resolves; */
        })
        
      /*  const date = await screen.findByTestId('reserveDate')
        await user.pointer(date, '2023-12-08') 

        const time = await screen.findByTestId('time')
        await user.selectOptions(time, '5:00pm')

        const occasion = await screen.findByTestId('occasion')
        await user.selectOptions(occasion, 'Birthday')

        const diners = await screen.findByTestId('NoOfDiners')
        await user.selectOptions(diners, '3')

        await user.click(screen.findByTestId('continue'))

        await waitFor(() => {
            expect(onSubmit).toBeCalledWith({
                reserveDate:'2023-12-08',
                time:'5:00pm',
                occasion:'Birthday',
                NoOfDiners:'3'
            })
        }) */
    })

});