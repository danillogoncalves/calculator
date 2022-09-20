import Keys from "../components/Keys";
import ScreenDisplay from "../components/ScreenDisplay";
import CalculatorContainer from "./Calculator.styled";

export default function Calculator () {
  return (
    <CalculatorContainer>
      <ScreenDisplay />
      <Keys />
    </CalculatorContainer>
  )
}