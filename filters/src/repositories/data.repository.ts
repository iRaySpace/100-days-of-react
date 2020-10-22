const _data = [
  'Armenia',
  'Azerbaijan',
  'Belarus',
  'Estonia',
  'Georgia',
  'Kazakhstan',
  'Kyrgyzstan',
  'Latvia',
  'Lithuania',
  'Moldova',
  'Russia',
  'Tajikistan',
  'Turkmenistan',
  'Ukraine',
  'Uzbekistan',
]

export class DataRepository {
  fetch() {
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(_data), 1000),
    )
  }
  search(name: string) {
    const filteredData = _data.filter((row) =>
      row.toLowerCase().includes(name.toLowerCase()),
    )
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(filteredData), 600),
    )
  }
}
