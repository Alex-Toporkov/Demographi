// src/components/FinancialModel.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';

// Регистрируем компоненты Chart.js
Chart.register(...registerables);

const FinancialModel = () => {
    const [profitabilityData, setProfitabilityData] = useState({
        labels: [],
        datasets: [],
        totalProfits: 0,
        totalCosts: 0,
        marketingCosts: 0,
        websiteCreationCosts: 0,
    });

    const [monthlySalesData, setMonthlySalesData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const products = [
            {
                type: 'Котенок',
                costPrice: 119650,
                retailPrice: 350000,
                unitsSold: 20,
            },
            {
                type: 'Щенок',
                costPrice: 61228,
                retailPrice: 250000,
                unitsSold: 15,
            },
        ];

        const marketingCosts = 50000;  // Затраты на рекламу
        const websiteCreationCosts = 30000;  // Затраты на создание сайта

        calculateProfitability(products, marketingCosts, websiteCreationCosts);
        setupMonthlySalesData();
    }, []);

    const calculateProfitability = (data, marketingCosts, websiteCreationCosts) => {
        const labels = data.map(product => product.type);
        const profits = data.map(product => (product.retailPrice - product.costPrice) * product.unitsSold);

        const totalProfits = profits.reduce((a, b) => a + b, 0);
        const totalCosts = data.reduce((a, b) => a + (b.costPrice * b.unitsSold), 0);

        setProfitabilityData({
            labels: labels,
            datasets: [
                {
                    label: 'Прибыль',
                    data: profits,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
            ],
            totalProfits: totalProfits,
            totalCosts: totalCosts,
            marketingCosts,
            websiteCreationCosts,
        });
    };

    const setupMonthlySalesData = () => {
        const labels = [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май',
            'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];

        const kittenSales = Array.from({ length: 12 }, () => Math.floor(Math.random() * 5) + 3); // Продажа котят
        const puppySales = Array.from({ length: 12 }, () => Math.floor(Math.random() * 4) + 2); // Продажа щенков

        const datasets = [
            {
                label: 'Продаваемые котята',
                data: kittenSales,
                backgroundColor: 'rgba(255, 159, 64, 0.6)', // Оранжевый
            },
            {
                label: 'Продаваемые щенки',
                data: puppySales,
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Синий
            }
        ];

        setMonthlySalesData({
            labels: labels,
            datasets: datasets,
        });
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Финансовая модель</h1>
            <Card className="mb-4">
                <Card.Body>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Товар</th>
                                <th>Себестоимость (руб)</th>
                                <th>Минимальная цена продажи (руб)</th>
                                <th>Розничная цена (руб)</th>
                                <th>Продано (шт)</th>
                                <th>Прибыль (руб)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profitabilityData.labels.map((label, index) => {
                                const product = {
                                    type: label,
                                    costPrice: label === 'Котенок' ? 119650 : 61228,
                                    retailPrice: label === 'Котенок' ? 350000 : 250000,
                                    unitsSold: label === 'Котенок' ? 20 : 15,
                                };
                                const profit = (product.retailPrice - product.costPrice) * product.unitsSold;
                                return (
                                    <tr key={product.type}>
                                        <td>{product.type}</td>
                                        <td>{product.costPrice} руб.</td>
                                        <td>{label === 'Котенок' ? 239300 : 122457} руб.</td>
                                        <td>{product.retailPrice} руб.</td>
                                        <td>{product.unitsSold}</td>
                                        <td>{profit} руб.</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            <h2 className="text-center mb-4">График прибыли</h2>
            {profitabilityData.labels.length > 0 && profitabilityData.datasets.length > 0 ? (
                <Bar data={profitabilityData} options={{ responsive: true }} />
            ) : (
                <p className="text-center">Загрузка данных для графика...</p>
            )}

            <h2 className="text-center mt-5 mb-4">Продажа по месяцам</h2>
            {monthlySalesData.labels.length > 0 && monthlySalesData.datasets.length > 0 ? (
                <Bar data={monthlySalesData} options={{ responsive: true }} />
            ) : (
                <p className="text-center">Загрузка данных для графика...</p>
            )}

            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <h3>Итого прибыли: {profitabilityData.totalProfits} руб.</h3>
                            <h3>Итого себестоимости: {profitabilityData.totalCosts} руб.</h3>
                            <h3>Затраты на рекламу: {profitabilityData.marketingCosts} руб.</h3>
                            <h3>Затраты на создание сайта: {profitabilityData.websiteCreationCosts} руб.</h3>
                            <h3>Общие затраты: {profitabilityData.totalCosts + profitabilityData.marketingCosts + profitabilityData.websiteCreationCosts} руб.</h3>
                            <h3>Чистая прибыль: {profitabilityData.totalProfits - (profitabilityData.totalCosts + profitabilityData.marketingCosts + profitabilityData.websiteCreationCosts)} руб.</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FinancialModel;
