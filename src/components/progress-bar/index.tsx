import { HTMLAttributes } from 'react';

export default function ProgressBar({
  current,
  total,
  ...props
}: HTMLAttributes<HTMLDivElement> & { current: number; total: number }) {
  return (
    <div
      {...props}
      className="relative border flex flex-col justify-center w-full sm:w-1/2"
    >
      <p className="absolute left-[84.11px] sm:left-[25%] text-center text-sm text-[#787773]">
        <span className="font-semibold">{current}</span> of{' '}
        <span className="font-semibold">{total}</span> tasks done
      </p>
      <div className="h-9 bg-white">
        <div
          className="h-9 bg-[#FDEB4A]"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
