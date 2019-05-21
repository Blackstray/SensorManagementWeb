export interface Item {
  floor?: number;
  id?: string;
  name?: string;
  type?: string;
  status?: string;
  power?: number;
  power_u?: string;
  power_interval_ms?: number;
  power_max?: number;
  power_min?: number;
  temperature?: number;
  temperature_u?: string;
  temperature_interval_ms?: number;
  temperature_max?: number;
  temperature_min?: number;
  amperage?: number;
  amperage_u?: string;
  amperage_interval_ms?: number;
  amperage_max?: number;
  amperage_min?: number;
  voltage?: number;
  voltage_u?: string;
  voltage_interval_ms?: number;
  voltage_max?: number;
  voltage_min?: number;
}
