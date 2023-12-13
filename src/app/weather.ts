export interface Weather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
  };
  name: string
}
