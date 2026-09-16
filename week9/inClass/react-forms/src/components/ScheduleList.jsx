import ScheduleItem from "./ScheduleItem";

function ScheduleList({ bookings }) {
    return (
        <>
            {bookings.map((booking, index) => {
                return <ScheduleItem key={index} booking={booking} />
            })}
        </>
    );
}

export default ScheduleList;