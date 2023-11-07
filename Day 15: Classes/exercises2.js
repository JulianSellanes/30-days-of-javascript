// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode)
// and measure of variability(range, variance, standard deviation).
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
// You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class.

array = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

class Statistics {
    constructor(_ages)
    {
        this.ages = _ages;
        this.ages.sort((a, b) => a - b);
    }

    count()
    {
        const num = this.ages.length;
        console.log(`Count: ${num}`);
    }

    sum()
    {
        const sum = this.ages.reduce((sum, cur) => sum + cur, 0);
        console.log(`Sum: ${sum}`);
    }

    min()
    {
        this.min = this.ages[0];
        console.log(`Min: ${this.min}`);
    }

    max()
    {
        this.max = this.ages[this.ages.length - 1];
        console.log(`Max: ${this.max}`);
    }

    range()
    {
        const range = this.max - this.min;
        console.log(`Range: ${range}`);
    }

    mean()
    {
        this.mean = ( this.ages.reduce((sum, cur) => sum + cur, 0) ) / this.ages.length;
        console.log(`Mean: ${this.mean}`);
    }

    median()
    {
        const median = this.ages[parseInt(this.ages.length/2)];
        console.log(`Median: ${median}`);
    }

    mode()
    {
        const set = new Set(this.ages);
        const counter = [];

        set.forEach(item => {
            const nums = this.ages.filter(age => age === item);
            counter.push( {num: item, count: nums.length} );
        });

        counter.sort((a, b) => b.count - a.count);

        const mode = counter[0];

        console.log(`Mode: ${mode.num}, Count: ${mode.count}`);
    }

    var()
    {
        this.newAges = this.ages.map(num => (num - this.mean) ** 2);

        this.newSum = this.newAges.reduce((sum, cur) => sum + cur, 0);

        const variance = this.newSum / this.newAges.length;
        console.log(`Variance: ${variance}`);
    }

    std()
    {
        const std = Math.sqrt(this.newSum / this.newAges.length);
        console.log(`Standard Deviation: ${std}`);
    }
}

/*
const statistics = new Statistics(array);
statistics.count();
statistics.sum();
statistics.min();
statistics.max();
statistics.range();
statistics.mean();
statistics.median();
statistics.mode();
statistics.var();
statistics.std();
*/