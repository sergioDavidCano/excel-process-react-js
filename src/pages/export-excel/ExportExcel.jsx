import './exportExcel.scss';
import React from 'react';
import { Button, Typography, PageHeader } from 'antd';
import { Animation } from '../../components/animation/Animation';

export const ExportExcel = () => {
    const { Paragraph } = Typography;
    return (
        <Animation>
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Exportar en excel"
                    extra={[
                        <Button key="3">Operation</Button>,
                        <Button key="2">Operation</Button>,
                        <Button key="1" type="primary">
                            Primary
                        </Button>,
                    ]}
                >
                    <Paragraph>
                        Importa datos de una petición (url) en este caso se mostraran en la tabla pero se podran exportar en un archivo excel
                    </Paragraph>
                </PageHeader>
            </div>
        </Animation>
    )
}