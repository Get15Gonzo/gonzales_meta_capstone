import { render, screen, within, fireEvent, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import BookingOne from '../components/BookingOne';

describe('BookingOne', () => {

        const onSubmit = jest.fn()

        beforeEach(() => {
            onSubmit.mockClear();
            render(<BookingOne onSubmit={onSubmit} />);
        })

    test('calls the continue button when all fields pass validation', async () => {
            const user = userEvent.setup()


            fireEvent.click(screen.getByPlaceholderText(/reservedate/i));
            fireEvent.mouseDown(screen.getByPlaceholderText(/reservedate/i));
            act(() => {fireEvent.change(screen.getByPlaceholderText(/reservedate/i)), {
                target: {value:'2023-12-08'}
            }})

            const dropdownDiner = screen.getByPlaceholderText('NumberOfDiners');
            user.selectOptions(dropdownDiner, within(dropdownDiner).getByRole('option', {name: '4'}))

            const dropdownOccasion = screen.getByPlaceholderText('Occasion')
            user.selectOptions(dropdownOccasion, within(dropdownOccasion).getByRole('option', {name:'Birthday'}));

            const dropdownTime = screen.getByPlaceholderText('Time')
            user.selectOptions(dropdownTime, within(dropdownTime).getByRole('option', {name:'7:00pm'}));

            await user.click(screen.getByRole('button', {name: /continue/i}))

            await waitFor(()=> {
                expect(onSubmit).toHaveBeenCalledWith({
                    date:'2023-12-08',
                    NoOfDiners:'4',
                    occasion:'Birthday',
                    time:'7:00pm'
                })
            })


    });
});