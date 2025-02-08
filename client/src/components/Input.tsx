import { InputProps } from '../interfaces/common';

const Input = ({ label, type = 'text', name, value, onChange, required, optional, className }: InputProps) => {
  return (
    <div className={styles.formControlContainer}>
      <div className={styles.formLabelContainer}>
        <label htmlFor={name} className={styles.formlabel}>
          {label}
        </label>
        {optional && <span className={styles.formOptional}>(Optional)</span>}
      </div>
      <input type={type} name={name} id={name} value={value} onChange={onChange} required={required} className={className} />
    </div>
  );
};

const styles = {
  formControlContainer: 'flex flex-col gap-2',
  formLabelContainer: 'flex items-center gap-2',
  formlabel: 'text-sm font-semibold text-gray-700',
  formInput: 'w-full rounded-lg border border-gray-300 px-4 py-2 shadow-md outline-none',
  formOptional: 'text-xs text-gray-400'
};

export default Input;
