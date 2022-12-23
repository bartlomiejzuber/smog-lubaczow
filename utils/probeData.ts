export type ProbeData = {
  DT: Date;
  IJP: number;
  REGS: {
    REGNAME: string;
    VALUE: string;
    DT: Date;
    IJP: number;
    PRECENT: number;
  }[];
};
