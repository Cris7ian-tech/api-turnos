import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Calendario = () => {
  const navigate = useNavigate();

  const handleSlotSelect = (slotInfo) => {
    console.log("Slot seleccionado:", slotInfo);
    navigate("/calendarioform", { state: { fechaSeleccionada: slotInfo.start } });
  };

  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2025-01-01T08:00").toDate(),
      end: dayjs("2025-01-01T13:00").toDate(),
      title: "Turno",
    },
  ];

  return (
    <div>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        onSelectSlot={handleSlotSelect} // Maneja el clic en un día
        min={dayjs("2025-01-01T08:00:00").toDate()}
        max={dayjs("2025-01-01T13:00:00").toDate()}
        style={{
          height: "95vh",
          width: "70vw",
        }}
      />
    </div>
  );
};

export default Calendario;
