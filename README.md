# Pseudo Date Parser

Utility to help you transform your dates into a comprehensive format.

## Getting Started

### Installing
```bash
$ npm i @pseudomera/date-parser
```

### How to use it
1. We import the package
```javascript
import PseudoDateParser from "@pseudomera/date-parser/dist/dateParser"
```

2. We can pass a number, date or a valid date string (e.g an ISO string)

    ```javascript
    //If you are using unix date format, e.g. 1610814996, It needs to be a number
    //If you pass it as a string it will fail.
    const parsedDate = PseudoDateParser(new Date())

    const parsedDate = PseudoDateParser(new Date())

    const parsedNumber = PseudoDateParser(2)
    
    const parsedISOString = PseudoDateParser("2007-03-01T13:00:00Z")

    ```
    
3. We use our parsed data!
```javascript

    console.log(
    `${parsedDate.dayOfTheWeek} ${parsedDate.monthNumber} ${parsedDate.month} ${parsedDate.year}`
    );
    
    console.log(
    `${parsedNumber.dayOfTheWeek} ${parsedNumber.monthNumber} ${parsedNumber.month} ${parsedNumber.year}`
    );
    
    console.log(
    `${parsedISOString.dayOfTheWeek} ${parsedISOString.monthNumber} ${parsedISOString.month} ${parsedISOString.year}`
    );
```

### Available properties

```typescript
  day: string;
  month: string;
  year: string;
  dayOfTheWeek: string;
  hour: string;
  minutes: string;
  seconds: string;
  miliseconds: string;
  amOrPm: string;
  monthNumber: string;
  monthShort: string;
```

## Built With

* [date-fns](https://date-fns.org/) - Modern Javascript date utility library
* [typescript](https://www.typescriptlang.org/) - Typed Javascript

## Contributing

Just open a pull request or issue.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Albin Frias** - [PseudoMera](https://github.com/PseudoMera)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
