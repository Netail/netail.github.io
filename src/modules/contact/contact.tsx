import type { FC } from 'react';
import Column from '../../components/column/column';
import Link from '../../components/link/link';
import Row from '../../components/row/row';
import Typography from '../../components/typography/typography';
import type { Contact } from '../../interfaces/contact';

interface ContactProps {
    contact: Contact[];
}

const Contact: FC<ContactProps> = ({ contact }) => {
    return (
        <Row>
            <Column size={{ xs: 12, lg: 6 }}>
                <Typography variant='heading2' id='contact'>
                    Contact
                </Typography>
            </Column>
            <Column size={{ xs: 12, lg: 6 }}>
                <Row>
                    {contact.map((contact, index) => (
                        <Column size={{ xs: 6 }} key={index}>
                            <Link label={contact.label} href={contact.href} />
                        </Column>
                    ))}
                </Row>
            </Column>
        </Row>
    );
};

export default Contact;
