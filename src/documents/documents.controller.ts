import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

@ApiTags('Documents')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post(':id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload multiple files',
    type: 'multipart/form-data',
    isArray: true,
  })
  @UseInterceptors(FilesInterceptor('files'))
  async upload(
    @UploadedFiles() files: Express.Multer.File[],
    @Param('id') id: string,
  ) {
    return this.documentsService.create(files, id);
  }

  @Get(':id')
  async findDocsByUser(@Param('id') id: string) {
    return this.documentsService.findMyDocs(id);
  }
}
