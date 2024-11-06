import Checkbox from './checkbox';

interface CheckboxGroupProps {
  options: { label: string, value: string }[];
  callback: (value: string, checked: boolean) => void;
}

export default function CheckboxGroup({options, callback}: CheckboxGroupProps) {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <Checkbox key={index} option={option} onChange={callback}/>
        )
      })}
    </div>
  )
}
