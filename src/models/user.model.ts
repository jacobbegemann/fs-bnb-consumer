import { Review } from './review.model';

export class User {

  constructor(private username: string, 
    private password: string,
    private firstName: string,
    private lastName: string,
    private birthday: string,
    private phone: string,
    private photoSource: string,
    private yearJoined: number,
    private numBookings: number,
    private location: string,
    private reviews: Array<Review>) {}

    setPhoto(url: string) { this.photoSource = url; }

    getUsername() { return this.username; }

    getPassword() { return this.password; }

    getFirstName() { return this.firstName; }

    getLastName() { return this.lastName; }

    getBirthday() { return this.birthday; }

    getPhone() { return this.phone; }

    getPhotoSource() { return this.photoSource; }

    getYearJoined() { return this.yearJoined; }

    getNumBookings() { return this.numBookings; }

    getLocation() { return this.location; }

    getReviews() { return this.reviews; }

}