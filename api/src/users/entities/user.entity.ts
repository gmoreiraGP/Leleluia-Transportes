import { Profile } from "src/profile/entities/profile.entity"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: "text",
        nullable: false,
        unique: true
    })
    email:  string

    @Column({
        type: "text",
        nullable: false,
    })
    password:  string

    @OneToOne(() => Profile, {
        eager: true,
        cascade: true,
    })
    @JoinColumn()
    profile: Profile
}
