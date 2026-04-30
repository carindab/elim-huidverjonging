import { Button, type ButtonProps } from "@/components/ui/button";
import { useBookingDialog } from "@/contexts/BookingDialogContext";

interface ReservationDialogProps {
  children: React.ReactNode;
  buttonVariant?: ButtonProps["variant"];
  buttonSize?: ButtonProps["size"];
  className?: string;
}

/**
 * Opent de gedeelde boekingspopup (één instantie via {@link BookingDialogProvider}).
 */
const ReservationDialog = ({
  children,
  buttonVariant = "cta",
  buttonSize = "xl",
  className,
}: ReservationDialogProps) => {
  const { open } = useBookingDialog();

  return (
    <Button type="button" variant={buttonVariant} size={buttonSize} className={className} onClick={open}>
      {children}
    </Button>
  );
};

export default ReservationDialog;
