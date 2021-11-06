export interface i18nString {
  en: string;
  fr: string;
  it: string;
  de: string;
}

export interface License {
  name: string;
  surname: string;
  address: string;
  nap: string;
  nation: string;
  date: string;
  number: string;
  email: string;
  imei: string;
  company: string;
  styles: MapboxStyle[]
}

export interface MapboxStyle {
  name: string;
  styles: {
    dark?: Style;
    light?: Style;
  };
}

export interface Style {
  id: string;
  name: string;
  fullname: string;
  url: string;
  type: "Light" | "Dark";
}

export interface InputStyle {
  id: string;
  name: string;
  sources: {
    composite: {
      url: string
    }
  };
}
