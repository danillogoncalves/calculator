import KeysContainer from "./Keys.styled";

export default function Keys() {
  return (
    <KeysContainer>
      <button value={'c'} onClick={(e: any) => console.log(e.target.value)}>C</button>
      <button>B</button>
      <button>%</button>
      <button>/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>0</button>
      <button>,</button>
      <button>=</button>
    </KeysContainer>
  )
}