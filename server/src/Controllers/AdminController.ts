import {
  Controller,
  Get,
  Post,
  Inject,
  Session,
  BodyParams,
  Delete,
  Put,
} from '@tsed/common'
import { hash, compare } from 'bcryptjs'
import { MongooseModel } from '@tsed/mongoose'
import { Admin } from 'Model/Admin'
import { SessionInterface, AdminInput, Response } from 'type'

@Controller('/admin')
class AdminController {
  constructor(@Inject(Admin) private model: MongooseModel<Admin>) {}

  @Get('/auth')
  public getAuth(@Session() session: SessionInterface): Response {
    if (session.user) return { success: session.user }
    return { error: true }
  }

  @Post()
  public async signIn(
    @BodyParams() params: AdminInput,
    @Session() session: SessionInterface,
  ): Promise<Response> {
    const { username, password } = params
    const user = await this.model.findOne({ username })
    if (!user) return { error: true }
    const isMatch = await compare(password, user.password)
    if (!isMatch) return { error: true }
    session.user = user
    return { success: true }
  }

  @Delete('/logout')
  public logout(@Session() session: SessionInterface): Response {
    delete session.user
    return { success: 'Sign out successfully' }
  }

  @Put()
  public async update(
    @BodyParams() params: Admin,
    @Session() session: SessionInterface,
  ): Promise<Response> {
    try {
      const { username, password } = params
      const { user } = session
      if (!username && !password) throw 'User Input are empty'
      const hashedPassword = await hash(params.password, 10)
      // const admin = this.model.findByIdAndUpdate(user)
    } catch (error) {
      return { error }
    }
    return { success: 'Updated Successfully' }
  }

  @Post('/register')
  public async register(@BodyParams() { username, password }: Admin): Promise<
    Response
  > {
    if (username && password) {
      const hashedPassword = await hash(password, 10)
      const admin = new this.model({ username, password: hashedPassword })
      admin.save(error => {
        if (error) return { error }
        return { success: true }
      })
    }
    return { error: 'Empty' }
  }
}

export default AdminController
