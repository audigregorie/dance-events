import { TextareProps } from '../interfaces/common';

const Textarea = ({ name, label, value, onChange, rows = 5, optional, className }: TextareProps) => {
  return (
    <div className={styles.formControlContainer}>
      <div className={styles.formLabelContainer}>
        <label htmlFor={name} className={styles.formlabel}>
          {label}
        </label>
        {optional && <span className={styles.formOptional}>(Optional)</span>}
      </div>
      <textarea id={name} name={name} value={value} onChange={onChange} rows={rows} className={className} />
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

export default Textarea;
