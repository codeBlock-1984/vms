import randomstring from 'randomstring';
import zeroFill from 'zero-fill';
import { PlateNumber, Lga } from '../db/models/index';

class PlateNumberController {
  static async create(req, res) {
    const { LgaId, generator, numbers } = req.body;
    console.log(req.body);
    // const plateNumberArray = [];

    const result = await Lga.findAll({ where: { id: LgaId }, attributes: ['code'], raw: true });

    const lgaCode = result[0].code;

    const dataArray = numbers.map((item) => {
      const newAlphaCode = randomstring.generate({
        length: 2,
        charset: 'alphabetic',
        capitalization: 'uppercase'
      });


      const paddedNumber = zeroFill(3, item.number);
      const alphaCode = item.skipped ? null : `${newAlphaCode} ${paddedNumber} ${lgaCode}`;

      return {
        LgaId,
        generator,
        NumberCodeId: item.number,
        aplhaCode: alphaCode
      };
    });

    console.log(dataArray);
    const response = await PlateNumber.bulkCreate(dataArray, { returning: true });

    if (response.length === 0) {
      res.status(500).json({
        message: 'Internal server error!'
      });
    }

    res.status(201).json({
      message: 'plate number successfully created',
      data: response
    });
  }

  static async getPlateNumbers(req, res) {
    const plateNumbers = await PlateNumber.findAndCountAll();

    if (plateNumbers.length === 0) {
      res.status(500).json({
        message: 'Internal server error!'
      });
    }

    res.status(200).json({
      message: 'plate numbers successfully retrieved',
      data: {
        data: plateNumbers.rows,
        count: plateNumbers.count
      }
    });
  }
}

export default PlateNumberController;
