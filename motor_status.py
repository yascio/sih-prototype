import requests

api_url = 'http://3.109.224.64:8080'  


def get_motor_status():
    try:
        response = requests.get(f'{api_url}/motor/status')
        response_data = response.json()
        return response_data
    except Exception as e:
        return {'error': str(e)}

if __name__ == '__main__':
    motor_status = get_motor_status()
    print('Current Motor Status:', motor_status)
