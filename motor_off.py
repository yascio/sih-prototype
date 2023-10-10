import requests


api_url = 'http://3.109.224.64:8080'  


def turn_motor_off():
    try:
        data = {'status': 'off'}
        response = requests.post(f'{api_url}/motor/update', json=data)
        response_data = response.json()
        return response_data
    except Exception as e:
        return {'error': str(e)}

if __name__ == '__main__':
    motor_status = turn_motor_off()
    print('Motor Status After Turning Off:', motor_status)
