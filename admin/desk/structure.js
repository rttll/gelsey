import S from '@sanity/desk-tool/structure-builder';
import { HiOutlineFilm, HiUser, HiMicrophone } from 'react-icons/hi';
import { GiMusicalScore } from 'react-icons/gi';
import { BiNews } from 'react-icons/bi';
import { RiCalendarEventFill, RiDoubleQuotesR } from 'react-icons/ri';
import { IoDocumentText } from 'react-icons/io';
import { IoBookmarkSharp } from 'react-icons/io5';
import { FaCompactDisc, FaTelegramPlane } from 'react-icons/fa';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Bio')
        .icon(HiUser)
        .child(
          S.document()
            .schemaType('bio')
            .documentId('bio')
        ),
      S.listItem()
        .title('Events')
        .icon(RiCalendarEventFill)
        .child(
          S.documentList()
            .title('Events')
            .filter('_type == "event"')
        ),
      S.listItem()
        .title('Contact')
        .icon(FaTelegramPlane)
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact')
        ),
      S.divider(),
      S.listItem()
        .title('Composer')
        .icon(GiMusicalScore)
        .child(
          S.list()
            .title('Composer')
            .items([
              S.listItem()
                .title('Intro / Content')
                .child(
                  S.document()
                    .schemaType('composer')
                    .documentId('composer')
                ),
              S.listItem()
                .title('Works')
                .child(
                  S.documentList()
                    .title('Works')
                    .filter('_type == "work"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                    .menuItems([
                      ...S.documentTypeList("work").getMenuItems(),
                    ])                                
                ),
            ])
        ),

      S.listItem()
        .title('Performer')
        .icon(HiMicrophone)
        .child(
          S.list()
            .title('Performer')
            .items([
              S.listItem()
                .title('Intro / Content')
                .child(
                  S.document()
                    .schemaType('performer')
                    .documentId('performer')
                ),
              S.listItem()
                .title('Performances')
                .child(
                  S.documentList()
                    .title('Performances')
                    .filter('_type == "performance"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                    .menuItems([
                      ...S.documentTypeList("performance").getMenuItems(),
                    ])                                
                ),
            ])
      ),
      
      S.listItem()
        .title('Scholar')
        .icon(IoBookmarkSharp)
        .child(
          S.list()
            .title('Scholar')
            .items([
              S.listItem()
                .title('Intro / Content')
                .child(
                  S.document()
                    .schemaType('scholar')
                    .documentId('scholar')
                ),
              S.listItem()
                .title('Publications')
                .child(
                  S.documentList()
                    .title('Publications')
                    .filter('_type == "publication"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                    .menuItems([
                      ...S.documentTypeList("publication").getMenuItems(),
                    ])                                
                ),
            ])
        ),        
      S.listItem()
        .title('Albums')
        .icon(FaCompactDisc)
        .child(
          S.documentList()
            .title('Albums')
            .filter('_type == "album"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
            .menuItems([
              ...S.documentTypeList("album").getMenuItems(),
            ])            
        ),
      S.listItem()
        .title('Videos')
        .icon(HiOutlineFilm)
        .child(
          S.documentList()
            .title('Videos')
            .filter('_type == "video"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
            .menuItems([
              ...S.documentTypeList("video").getMenuItems(),
            ])                        
        ),

      S.listItem()
        .title('Press')
        .icon(BiNews)
        .child(
          S.list()
            .title('Press')
            .items([
              S.listItem()
                .title('Articles')
                .icon(IoDocumentText)
                .child(
                  S.documentList()
                    .title('Articles')
                    .filter('_type == "press"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                    .menuItems([
                      ...S.documentTypeList("press").getMenuItems(),
                    ])                                
                ),
              S.listItem()
                .title('Quotes')
                .icon(RiDoubleQuotesR)
                .child(
                  S.documentList()
                    .title('Quotes')
                    .filter('_type == "quote"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                    .menuItems([
                      ...S.documentTypeList("quote").getMenuItems(),
                    ])                                
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Addresses')
        // .icon(Music)
        .child(
          S.documentList()
            .title('Addresses')
            .filter('_type == "address"')
        ),
      S.listItem()
        .title('Social Links')
        // .icon(Music)
        .child(
          S.documentList()
            .title('Social Links')
            .filter('_type == "social_link"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
            .menuItems([
              ...S.documentTypeList("social_link").getMenuItems(),
            ])                        
        ),
      S.listItem()
        .title('Event Archive')
        // .icon(Music)
        .child(
          S.documentList()
            .title('Event Archive')
            .filter('_type == "event_archive"')
        ),
    ]);
